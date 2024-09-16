import { cardsInfo } from "../utils/info";
function Card(tittle, items){
    return(
        <div className="block max-w p-6 bg-[#ffe7c9] border border-gray-200 rounded-2xl shadow hover:shadow-slate-800 h-auto">
            <h2 className="mb-2 text-2xl font-bold traking-tight text-justify txt-black py-2">{tittle}</h2>
            <ul>
                {items.map((item)=> (
                    <li key={item.id}>
                        <h5 className="font-bold">{item.id}. {item.title}</h5>
                        <p className="px-8 pb-1">{item.description}</p>
                    </li>
                )
                )
                }
            </ul>
        </div>
    );
}

function Dofa() {
    return(
        <section className="flex-col w-full h-auto bg-[#e2f0fb] px-6 py-2">
            <h1 className="font-bold text-2xl justify-items-start pl-2">
                Current diagnosis(SWOT)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-2">
                {cardsInfo.map((card)=>{
                    return(
                        Card(card.type, card.items)
                    )
                }
                )
                }
            </div>
        </section>
    );
}
export default Dofa;