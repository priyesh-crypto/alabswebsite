export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-12 text-center">
      <div>
        <h1 className="text-3xl font-medium mb-3">AnalytixLabs — scaffold ready</h1>
        <p className="text-muted-foreground">
          Phase 1 scaffold is up. The Figma exports under{" "}
          <code>src/imports/</code> are untouched. Wiring of the dynamic pages
          happens in Phase 4 per CLAUDE.md §8.
        </p>
      </div>
    </main>
  );
}
