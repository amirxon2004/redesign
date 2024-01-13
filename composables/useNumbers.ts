export const useUtils = ()=>{
    const price = (msg: string | number,parseMode:any) => {
        let mode = parseMode??' '
        if (msg) {
            return msg && msg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, mode)
          } else {
            return msg
          }
    };
    return{
        price
    }
}