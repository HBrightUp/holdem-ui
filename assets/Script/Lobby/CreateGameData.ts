
let field = (fieldName:any)=>{
    return (fieldName:any,test:any)=>{};
}

let serialize = (fieldName:any)=>{
    return (fieldName:any,test:any)=>{};
}
if (window.Borsh){
    field = window.Borsh.field;
    serialize = window.Borsh.serialize;
}
export class Create {
    @field('u64')
    sb!: bigint;

    @field('u64')
    bb!: bigint;

    @field('u16')
    rake!: number;

    @field('u8')
    autoStart!: number;

    constructor(fields: any) {
        Object.assign(this, fields);
    }
}

export function setCreateData(data) {
    return serialize(new Create(data))
}
  