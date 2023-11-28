import React from "react";
import { Card } from "@repo/ui/card";
import { add } from "@repo/ui/main";

export default function TurboPage() {
  const result = add(2, 3);

  return (
    <main style={{ margin: 30, background: "none" }}>
      <nav>NAV</nav>
      <div style={{ marginTop: 20 }}>Turbo</div>
      <div style={{ marginTop: 10 }}>{result}</div>
      <Card title="1" href="#">
        Carda
      </Card>
    </main>
  );
}
