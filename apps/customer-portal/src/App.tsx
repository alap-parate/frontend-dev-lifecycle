import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <>
      <h1>Complete Customer Portal Frontend</h1>
      <Button
        onClick={() => {
          alert(formatCurrency(1000000));
        }}
      />
      <p>A new feature!</p>
      <p>One more new feature for origin:main</p>
    </>
  );
}

export default App;
