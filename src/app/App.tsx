/* Conversation Coach: for families of someone with aphasia or hearing loss. Six techniques for
   the chosen situation, a daily practice checklist and a 14-day streak. Four languages. On-device. */
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HeartHandshake } from "lucide-react";
import { AppShell } from "@/shell/AppShell";
import { Callout, Check, Panel, Segmented, cx } from "@/shell/ui";
import { References } from "@/shell/References";
import { usePersistent } from "@/shell/storage";
import { toast } from "@/shell/toast";
import { fmtDate, todayISO } from "@/shell/lib";
import { TECH, last14Days, type Lang, type Mode } from "./techniques";
import refs from "./refs.json";

type Log = Record<string, number[]>;   // "aphasia|2026-11-22" -> [0,2,3]

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Lang;
  const [mode, setMode] = usePersistent<Mode>("cc-mode", "aphasia");
  const [log, setLog] = usePersistent<Log>("cc-log", {});

  const techs = TECH[mode];
  const todayKey = `${mode}|${todayISO()}`;
  const today = log[todayKey] ?? [];
  const days = useMemo(() => last14Days().map(d => ({ ...d, on: (log[`${mode}|${d.iso}`] ?? []).length > 0 })), [log, mode]);
  const practised = days.filter(d => d.on).length;

  const toggle = (i: number, on: boolean) => {
    setLog(l => {
      const cur = l[todayKey] ?? [];
      return { ...l, [todayKey]: on ? [...new Set([...cur, i])] : cur.filter(x => x !== i) };
    });
    toast(t("saved"));
  };

  return (
    <AppShell title={t("appName")} subtitle={t("appSub")} footer={<p className="m-0">{t("disclaimer")}</p>}>
      <div className="mx-auto grid max-w-3xl gap-5">
        <header>
          <h2 className="m-0 text-xl font-bold">{t("h2")}</h2>
          <p className="m-0 mt-1 text-muted">{t("intro")}</p>
        </header>

        <div><Segmented label="Situation" value={mode} onChange={setMode}
          options={[{ value: "aphasia", label: t("mAph") }, { value: "hearing", label: t("mHear") }]} /></div>

        <Callout tone="info">{mode === "aphasia" ? t("noteAph") : t("noteHear")}</Callout>

        <ol className="m-0 grid list-none gap-3 p-0">
          {techs.map((x, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink text-base font-bold text-paper">{i + 1}</span>
              <div><h3 className="m-0 text-base font-bold">{x.title[lang] ?? x.title.en}</h3>
                <p className="m-0 mt-0.5 text-[0.95rem]">{x.detail[lang] ?? x.detail.en}</p></div>
            </li>
          ))}
        </ol>

        <Panel title={t("practiceTitle")}>
          <p className="m-0 text-[0.95rem] text-muted">{t("practiceIntro")}</p>
          <div className="mt-1">{techs.map((x, i) => <Check key={i} checked={today.includes(i)} onChange={v => toggle(i, v)}>{x.title[lang] ?? x.title.en}</Check>)}</div>
          <div className="mt-4 flex flex-wrap items-center gap-1" aria-hidden>
            {days.map(d => <span key={d.iso} title={fmtDate(d.date, lang)}
              className={cx("flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold",
                d.on ? "bg-ok text-white" : "bg-track text-muted", d.iso === todayISO() && "ring-2 ring-accent")}>{d.date.getDate()}</span>)}
          </div>
          <p className="m-0 mt-2 font-semibold">{t("streak", { n: practised })}</p>
        </Panel>

        <Panel title={<span className="inline-flex items-center gap-2"><HeartHandshake className="h-5 w-5" aria-hidden />{t("helpTitle")}</span>}>
          <p className="m-0 text-[0.95rem]">{t("helpText")}</p>
        </Panel>

        <References refs={refs} contextQuery={mode === "aphasia" ? "aphasia supported conversation partner training" : "hearing loss clear speech communication"} contextLabel="Evidence behind these techniques" />
      </div>
    </AppShell>
  );
}
