let field = (fieldType:any)=>{
  return (target:any,key:any)=>{};
}

let variant = (fieldName:number)=>{
  return (fieldName:any)=>{};
}

let serialize = (fieldName:any)=>{
  return (fieldName:any,test:any)=>{};
}
if (window.Borsh){
  field = window.Borsh.field;
  variant = window.Borsh.variant;
  serialize = window.Borsh.serialize;
}

export interface ICustomEvent {
  serialize(): Uint8Array;
}

// export abstract class GameEvent implements ICustomEvent {
//   serialize(): Uint8Array {
//     return serialize(this);
//   }
// }

export abstract class GameEvent {
  serialize() {
    return serialize(this);
  }
}
  
  @variant(0)
  export class Bet extends GameEvent{
    @field('u64')
    amount!: bigint;
  
    constructor(fields: any) {
      super();
      Object.assign(this, fields)
    }
  }
  
  @variant(1)
  export class Check extends GameEvent {
    constructor() {
      super();
    }
  }
  
  
  @variant(2)
  export class Call extends GameEvent {
    constructor() {
      super();
    }
  }
  
  
  @variant(3)
  export class Fold extends GameEvent {
    constructor() {
      super();
    }
  }
  
  
  @variant(4)
  export class Raise extends GameEvent {
    @field('u64')
    amount!: bigint;
  
    constructor(fields: any) {
      super();
      Object.assign(this, fields)
    }
  }

  @variant(5)
  export class StartGame extends GameEvent {
    constructor() {
      super();
    }
  }

  @variant(6)
  export class SecretsReady extends GameEvent {
    constructor(_: any = {}) {
      super();
    }
  }

  