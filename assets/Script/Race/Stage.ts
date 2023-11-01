  let field = (fieldType:any)=>{
    return (target:any,key:any)=>{};
  }
  
  let option = (innerType:any)=>{
    return { kind: 'option', value: innerType };
  }
  let array = (elementType:any)=>{
    return { kind: 'array', value: elementType };
  }
  
  let struct = (ctor:any)=>{
    return { kind: 'struct', value: ctor };
  }
  



  
  if (window.Borsh){
    field = window.Borsh.field;
    option = window.Borsh.option;
    array = window.Borsh.array;
    struct = window.Borsh.struct;
  }

class Player {
    @field('string')
    addr!: string;
    @field('u64')
    balance!: bigint;
    @field('u64')
    bet!: bigint;
    constructor(fields: any) {
        Object.assign(this, fields);
    }
}

enum GameStage {
    Dealing = 0,
    Betting,
    Reacting,
    Revealing,
    Ending,
}
export class State {
    @field(option('string'))
    lastWinner!: string | undefined;
    @field('usize')
    randomId!: number;
    @field(array(struct(Player)))
    players!: Player[];
    @field('u8')
    stage!: GameStage;
    @field('u64')
    bet!: bigint
    @field('u64')
    blindBet!: bigint;
    @field('u64')
    minBet!: bigint;
    @field('u64')
    maxBet!: bigint;
    constructor(fields: any) {
        Object.assign(this, fields);
    }
    
}