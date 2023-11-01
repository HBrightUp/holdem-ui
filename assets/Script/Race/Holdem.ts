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

let map = (keyType:any,valueType:any)=>{
  return {
    kind:'map',
    value:[keyType,valueType]
  }
}
let variant = (fieldName:number)=>{
  return (fieldName:any)=>{};
}
let enums = (enumClass:any)=>{
  return { kind: 'enum', value: enumClass };
}

if (window.Borsh){
  field = window.Borsh.field;
  option = window.Borsh.option;
  array = window.Borsh.array;
  struct = window.Borsh.struct;
  map = window.Borsh.map;
  variant = window.Borsh.variant;
  enums = window.Borsh.enums;
}


class Bet {
    @field('string')
    owner!: string;
  
    @field('u64')
    amount!: bigint;
  
    constructor(fields: any) {
      Object.assign(this, fields)
    }
  }
  
  enum PLAYER_STATUS {
    Wait,
    Acted,
    Acting,
    Allin,
    Fold,
    Init, // Indicating new players ready for the next hand
    Leave,
    Out,
  };
  
  type PlayerStatus = typeof PLAYER_STATUS[keyof typeof PLAYER_STATUS];
  
  class Player {
    @field('string')
    addr!: string;
  
    @field('u64')
    chips!: bigint;
  
    @field('usize')
    position!: number;
  
    @field('u8')
    status!: PlayerStatus;

    @field('u8')
    timeout!: number;//PlayerStatus;
  
    constructor(fields: any) {
      Object.assign(this, fields)
    }
  }

  class usize {
    @field(array('string'))
    owners!: string[];
  
    @field(array('string'))
    winners!: string[];
  
    @field('u64')
    amount!: bigint;
  
    constructor(fields: any) {
      Object.assign(this, fields)
    }
  }

  class Pot {
    @field(array('string'))
    owners!: string[];
  
    @field(array('string'))
    winners!: string[];
  
    @field('u64')
    amount!: bigint;
  
    constructor(fields: any) {
      Object.assign(this, fields)
    }
  }
  
  const STREET = {
    INIT: 0,
    PREFLOP: 1,
    FLOP: 2,
    TURN: 3,
    RIVER: 4,
    SHOWDOWN: 5
  };
  
  type Street = typeof STREET[keyof typeof STREET];
  
  class HoldemAccount {
    @field('u64')
    sb!: bigint;
  
    @field('u64')
    bb!: bigint;
  
    @field('u16')
    rake!: number;
  
    constructor(fields: any) {
      Object.assign(this, fields)
    }
  }
  
  const HOLDEM_STAGE = {
    INIT: 0,
    SHARE_KEY: 1,
    PLAY: 2,
    RUNNER: 3,
    SETTLE: 4,
    SHOWDOWN: 5
  };
  
  type HoldemStage = typeof HOLDEM_STAGE[keyof typeof HOLDEM_STAGE];
  
  class ActingPlayer {
    @field('string')
    addr!: string;
  
    @field('usize')
    position!: number;

    @field('u64')
    timeout!: bigint;

    constructor(fields: any) {
      Object.assign(this, fields);
    }
  }

  export class AwardPot {
    @field(array('string'))
    winners!: string[];
  
    @field('u64')
    amount!: bigint;

    constructor(fields: any) {
      Object.assign(this, fields);
    }

  }
  export type Fields<T> = Pick<T, keyof T>;
  type DisplayFields<T> = Omit<Fields<T>, 'kind'>
  
  export type DisplayKind = 'Display' // an invalid value
  | 'DealCards'
  | 'DealBoard'
  | 'CollectBets'
  | 'ChangeChips'
  | 'UpdateChips'
  | 'AwardPots'
  | 'GameResult'
  | 'Cat'
  | 'Dog';

  interface IDisplaytKind {
    kind(): DisplayKind;
  }

  export abstract class Display implements IDisplaytKind{
    kind(): DisplayKind {
      return 'Display';
    }
  }
  
  @variant(0)
  export class DealCards extends Display implements IDisplaytKind {
    constructor(_: any = {}) {
      super();
    }
    kind(): DisplayKind{
      return 'DealCards';
    }
  }
  
  @variant(1)
  export class DealBoard extends Display implements IDisplaytKind {
    @field('usize')
    prev!: number;
  
    @field(array('string'))
    board!: string[];
  
    constructor(fields: DisplayFields<DealBoard>) {
      super();
      Object.assign(this, fields);
    }
    kind(): DisplayKind{
      return 'DealBoard';
    }
  }
  
  @variant(2)
  export class CollectBets extends Display implements IDisplaytKind {
    @field(map('string', 'u64'))
    betMap!: Map<string, bigint>;
  
    constructor(fields: DisplayFields<CollectBets>) {
      super();
      Object.assign(this, fields);
    }

    kind(): DisplayKind{
      return 'CollectBets';
    }
  }
  
  @variant(3)
  export class AwardPots extends Display implements IDisplaytKind {
    @field(array(struct(AwardPot)))
    pots!: AwardPot[];
  
    constructor(fields: DisplayFields<AwardPots>) {
      super();
      Object.assign(this, fields);
    }
    kind(): DisplayKind{
      return 'AwardPots';
    }
  }
  
  export class PlayerResult {
    @field('string')
    addr!: string;
  
    @field('u64')
    chips!: bigint;
  
    @field(option('u64'))
    prize!: bigint | undefined;

    @field('u8')
    status!: number;

    @field('usize')
    position!: number;

    constructor(fields: any) {
      Object.assign(this, fields);
    }
  }

  @variant(4)
  export class GameResult extends Display implements IDisplaytKind {
    @field(map('string', struct(PlayerResult)))
    playerMap!: Map<string, PlayerResult>;
  
    constructor(fields: DisplayFields<GameResult>) {
      super();
      Object.assign(this, fields);
    }
    kind(): DisplayKind{
      return 'GameResult';
    }
  }
  
  enum Category_Type {
    RoyalFlush,
    StraightFlush,
    FourOfAKind,
    FullHouse,
    Flush,
    Straight,
    ThreeOfAKind,
    TwoPairs,
    Pair,
    HighCard,
  }
  type Category = typeof Category_Type[keyof typeof Category_Type];
  export class PlayerHandcopy {
    @field('u8')
    category!: Category;
  
    @field(array('string'))
    picks!: string[];

    @field(array('u8'))
    value!: number[];

    constructor(fields: any) {
      Object.assign(this, fields);
    }

  } 
  class PlayerHand {
    address: string
    data: PlayerHandcopy
 }
  export class Holdem {
    @field('usize')
    deck_random_id!: number;
  
    @field('u64')
    sb!: bigint;
  
    @field('u64')
    bb!: bigint;
  
    @field('u64')
    minRaise!: bigint;
  
    @field('usize')
    btn!: number;
  
    @field('u16')
    rake!: number;

    @field('u8')
    playersStartGame!: number;
  
    @field('u8')
    stage!: number;
  
    @field('u8')
    street!: number;
  
    @field('u64')
    streetBet!: bigint;
  
    @field(array('string'))
    board!: string[];
  
    @field(map('string', array('usize')))
    handIndexMap!: Map<string, number[]>;
  
    @field(map('string', 'u64'))
    betMap!: Map<string, bigint>;
  
    @field(map('string', 'u64'))
    prizeMap!: Map<string, bigint>;
  
    @field(map('string', struct(Player)))
    playerMap!: Map<string, Player>;
  
    @field(array('string'))
    playerOrder!: string[];
  
    @field(array(struct(Pot)))
    pots!: Pot[];
  
    @field(option(struct(ActingPlayer)))
    actingPlayer!: ActingPlayer | undefined;

    @field(array('string'))
    winners!: string[];
  
    @field(array(enums(Display)))
    display!: Display[];

    @field(array(PlayerHand))
    playerHands!: PlayerHandcopy[]
  
    constructor(fields: any) {
      Object.assign(this, fields);
    }
  }
  // pub struct Test {
  //   pub deck_random_id: RandomId,
  // }
  // class Test {
  //   @field('usize')
  //   deck_random_id!: number;
  // }

  