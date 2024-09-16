import Introduction from "./introduction";
import Dofa from "./Dofa"
import Identity from "./Identity";
function Main() {
    return (
        <section className="flex justify-center items-center w-full h-auto bg-white border-b flex-col bg-[#e2f0fb]">
            <>
            <Introduction/>
            <Dofa/>
            <Identity/>
            </>
        </section>
    );
}

export default Main;