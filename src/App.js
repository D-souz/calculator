
function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h3>React calculator</h3>
        <span>By D'souz</span>
        <div className="container bg-dark col-4 mt-5 text-center" id="cal">
          <div className="row" id="display-screen">
            <p>hey</p>
            <div id="display">0</div>
          </div>
          <div className="row">
                <div className=" p-3 col-6" id="clear">AC</div>
                <div className=" p-3 col-3" id="divide">/</div>
                <div className=" p-3 col-3" id="multiply">*</div>  
          </div>
        <div className="row">
                <div className=" p-3 col-3" id="seven">7</div>
                <div className=" p-3 col-3" id="eight">8</div>
                <div className=" p-3 col-3" id="nine">9</div>
                <div className=" p-3 col-3" id="subtract">-</div>  
          </div>
        <div className="row">
                <div className=" p-3 col-3" id="four">4</div>
                <div className=" p-3 col-3" id="five">5</div>
                <div className=" p-3 col-3" id="six">6</div>
                <div className=" p-3 col-3" id="add">+</div>  
          </div>
        <div className="row">
                <div className=" p-3 col-3" id="one">1</div>
                <div className=" p-3 col-3" id="two">2</div>
                <div className=" p-3 col-3" id="three">3</div>
                <div className=" p-3 col-3" id="decimal">.</div>
          </div>
          <div className="row">
                <div className=" p-3 col-3" id="zero">0</div> 
                <div className=" p-3 col-3 " id="del"><i class="bi bi-backspace"></i></div> 
                <div className=" p-3 col-6" id="equals">=</div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
