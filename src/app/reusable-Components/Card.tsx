import { ICard } from "../common/interfaces/reusableComponents/Card"

export const Card=(prop:ICard)=>{
    return(<div style={{
        height:prop.height,
        width:prop.width,
        backgroundColor:prop.background_color
    }}>

        {prop.children}
    </div>)
}