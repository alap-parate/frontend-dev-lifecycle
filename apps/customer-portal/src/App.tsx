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
      {/* <div onClick={() => console.log("hi, im not tested.")}>
        Something not tested
      </div> */}
    </>
  );
}

export default App;
