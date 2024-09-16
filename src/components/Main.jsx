import Introduction from "./introduction";
import Dofa from "./Dofa";
import Identity from "./Identity";
import Goals from "./Goals";
function Main() {
    return (
        <section className="flex justify-center items-center w-full h-auto bg-white border-b flex-col bg-[#e2f0fb] ">
            <>
            <Introduction/>
            <Dofa/>
            <Identity/>
            <Goals/>
            </>
        </section>
    );
}

export default Main;