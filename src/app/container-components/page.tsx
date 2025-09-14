

import Container_1 from "./container-1/page"
import Container_2 from "./container-2/page";
import Container_3 from "./container-3/page"

export default function ContainerComponents() {
  return (
    <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2, 50%)" }}>
      <Container_1 />
      <Container_2 />
      <Container_3 />
    </div>
  );
}
