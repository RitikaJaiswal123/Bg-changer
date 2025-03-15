function Button(prop) {
    return (
      <button
        onClick={prop.Clk}
        className="outline-none px-4 py-1 bg-gray-300 rounded-full shadow-lg text-white" style={{backgroundColor:prop.clr}}  
      >
        {prop.clr}
      </button>
    );
  }
  
  export default Button;
  