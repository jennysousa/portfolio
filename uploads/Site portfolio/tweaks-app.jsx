// Jennifer Sousa — Portfolio · Tweaks
const { useEffect } = React;

const HERO_LABELS = {
  "Editorial (alinhado à esquerda)": "editorial",
  "Centralizado": "centro",
  "Dividido (título + texto)": "split",
  "Mega (tipografia gigante)": "mega",
};
const HERO_OPTIONS = Object.keys(HERO_LABELS);

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "Editorial (alinhado à esquerda)",
  "accent": "#52C2E8",
  "animations": true
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const root = document.documentElement;

  useEffect(() => {
    root.setAttribute("data-hero", HERO_LABELS[t.hero] || "editorial");
  }, [t.hero]);

  useEffect(() => {
    root.style.setProperty("--accent", t.accent || "#52C2E8");
  }, [t.accent]);

  useEffect(() => {
    root.setAttribute("data-anim", t.animations ? "on" : "off");
  }, [t.animations]);

  return (
    <TweaksPanel>
      <TweakSection label="Hero" />
      <TweakSelect label="Layout do hero" value={t.hero} options={HERO_OPTIONS}
        onChange={(v) => setTweak("hero", v)} />
      <TweakSection label="Cor & movimento" />
      <TweakColor label="Cor de destaque" value={t.accent}
        options={["#52C2E8", "#FF8000", "#9884FF", "#FFFFFF"]}
        onChange={(v) => setTweak("accent", v)} />
      <TweakToggle label="Animações ao rolar" value={t.animations}
        onChange={(v) => setTweak("animations", v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<TweaksApp />);
