import "./styles.css";
import { useState, useEffect } from "react"

export default function App() {
  // Hooks
  const [personItems, setPersonItems] = useState(0)
  const [checkoutLines, setCheckoutLines] = useState([[10,5],[9,4,2],[12,2],[5,8,1],[15]])

  useEffect(() => {
    // TODO: Every 1 second
    // reduce 1 item in persons cart
    
    const interval = setInterval(() => {
      setCheckoutLines(prevLine => {
        return prevLine.map(line => 
          [line[0] - 1, ...line.slice(1)].filter(value => value > 0)
        )
      })

    }, 1000)
    
    return () => {
      clearInterval(interval);
    }
  },[])
  

  // Functions
  const handleCheckoutForm = (e) => {
    e.preventDefault()
    
    let leastTotalItems = 1e9;
    let customerWithTheLeastItems;
    
    for(const customer of checkoutLines) {
      const totalCustomerItems = customer.reduce((sum,value) => sum + value, 0)
      if (totalCustomerItems < leastTotalItems) {
        leastTotalItems = totalCustomerItems;
        customerWithTheLeastItems = customer;
      }
    }
    
    setCheckoutLines(prevLine => {
      return prevLine.map(line => line === customerWithTheLeastItems ? [...line, personItems] : line )
    })
  }
  
  
  
  return (
    <div className="App">
      <h1>Store Cashier Checkout</h1>
      
      <form onSubmit={handleCheckoutForm}>
        <div className="form-input">
          <label htmlFor="txtPersonItems">Enter person items</label>
          <input id="txtPersonItems" onChange={e => setPersonItems(+e.currentTarget.value)} />
        </div>
        <button>Add to person checkout line</button>
      </form>
      
      <div className="cashiers">
           {checkoutLines.map((line, idx) => (
              <div className="line" key={idx}>
                <div className="cashier">C#{idx+1}</div>
                {line.map((person, idx) => (
                  <div className="person-in-line" key={idx}>{person}</div>
                ))}
              </div>
           ))}
      </div>
    </div>
  );
}
