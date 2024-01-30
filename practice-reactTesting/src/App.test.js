import React , {render,screen} from "@testing-library/react";
import App from './App'

// This is our testing js file

test("",()=>{
    render(<App />);
    const linkElement = screen.getByText("Restaurant Name");
    expect(linkElement).toBeInTheDocument();
});