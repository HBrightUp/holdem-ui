// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import SingtonClass from "../SingtonClass";

// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class NewClass extends SingtonClass {

//     // private static _instance: AudioManager;
//     // private static _audioSource?: AudioSource;

//     // private static _soundSource?: AudioSource;

//     // static get instance() {
//     //     if (this._instance) {
//     //         return this._instance;
//     //     }

//     //     this._instance = new AudioManager();
//     //     return this._instance;
//     // }

//     // soundVolume: number = 1;

//     // // init AudioManager in GameRoot.
//     // init(audioSource: AudioSource) {
//     //     //this.soundVolume = this.getConfiguration(false) ? 1 : 0;

//     //     AudioManager._audioSource = audioSource;
//     //     this.setMusicVolume(this.getConfiguration(true) ? 1 : 0)
//     // }

//     // setSoundSource(audioSource: AudioSource){
//     //     AudioManager._soundSource = audioSource;
//     //     this.soundVolume =  this.soundVolume = this.getConfiguration(false) ? 1 : 0;
//     // }

//     // getConfiguration(isMusic: boolean) {
//     //     let state;
//     //     if (isMusic) {
//     //         state = configuration.instance.getGlobalData('music');
//     //     } else {
//     //         state = configuration.instance.getGlobalData('sound');
//     //     }

//     //     // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);

//     //     return !state || state === 'true' ? true : false;
//     // }

//     // /**
//     //  * 播放音乐
//     //  * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
//     //  * @param {Boolean} loop 是否循环播放
//     //  */
//     // playMusic(loop: boolean, name: string) {//, gameId: proto.GameID = 0
//     //     const audioSource = AudioManager._audioSource!;
//     //     assert(audioSource, 'AudioManager not inited!');

//     //     // let type = '';
//     //     // switch (gameId) {
//     //     //     case proto.GameID.LONGHU:
//     //     //         type = 'lh/';
//     //     //         break;
//     //     //     case proto.GameID.NIUNIU:
//     //     //         type = 'nn/';
//     //     //         break;
//     //     //     case proto.GameID.SENLINWUHUI:
//     //     //         type = 'slwh/';
//     //     //         break;
//     //     //     case proto.GameID.MEINVXIEZHEN:
//     //     //         type = 'mnxz/';
//     //     //         break;
//     //     //     case proto.GameID.HONGHEIDAZHAN:
//     //     //         type = 'hh/';
//     //     //         break;
//     //     //     default:
//     //     //         break;
//     //     // }
//     //     let path = '/sound/';
//     //     //console.log(path + name);
//     //     // if (name !== 'click') {
//     //     //     path = 'gamePackage/' + path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
//     //     // }
//     //     if(audioSource.playing){
//     //         audioSource.stop();
//     //     }
//     //     resourceUtil.loadRes(path + name, AudioClip, (err, clip) => {
//     //         if (err) {
//     //             warn('load audioClip failed: ', err);
//     //             return;
//     //         }

//     //         // NOTE: the second parameter is volume scale.
//     //         audioSource.clip = clip;

//     //         audioSource.loop = loop;
//     //         //if (!audioSource.playing) {
//     //             audioSource.play();
//     //        // }
//     //     });
//     // }

//     // stopMusic(){
//     //     const audioSource = AudioManager._audioSource!;
//     //     if(audioSource&&audioSource.playing){
//     //         audioSource.stop();
//     //     }
//     // }
//     // stopSound(){
//     //     const soundSource = AudioManager._soundSource!;
//     //     if(soundSource&&soundSource.playing){
//     //         soundSource.pause();
//     //     }
//     // }

//     // /**
//     //  * 播放音效
//     //  * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
//     //  */
//     // playSound(name: string) {//, gameId: proto.GameID = 0
//     //     const audioSource = AudioManager._soundSource!;
//     //     assert(audioSource, 'AudioManager not inited!');

//     //     //音效一般是多个的，不会只有一个

//     //     let type = '';
//     //     // switch (gameId) {
//     //     //     case proto.GameID.LONGHU:
//     //     //         type = 'lh/';
//     //     //         break;
//     //     //     case proto.GameID.NIUNIU:
//     //     //         type = 'nn/';
//     //     //         break;
//     //     //     case proto.GameID.SENLINWUHUI:
//     //     //         type = 'slwh/';
//     //     //         break;
//     //     //     case proto.GameID.MEINVXIEZHEN:
//     //     //         type = 'mnxz/';
//     //     //         break;
//     //     //     case proto.GameID.HONGHEIDAZHAN:
//     //     //         type = 'hh/';
//     //     //         break;
//     //     //     default:
//     //     //         break;
//     //     // }
//     //     let path = 'sound/';//+type
//     //     //console.log(path + name);
//     //     // if (name !== 'click') {
//     //     //     path = 'gamePackage/' + path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
//     //     // }
//     //     resourceUtil.loadRes(path + name, AudioClip, (err, clip) => {
//     //         if (err) {
//     //             warn('load audioClip failed: ', err);
//     //             return;
//     //         }

//     //         // NOTE: the second parameter is volume scale.
//     //         audioSource.playOneShot(clip, this.soundVolume / audioSource.volume);
//     //     });

//     // }

//     // setMusicVolume(flag: number) {
//     //     const audioSource = AudioManager._audioSource!;
//     //     assert(audioSource, 'AudioManager not inited!');

//     //     flag = clamp01(flag);
//     //     audioSource.volume = flag;
//     // }

//     // setSoundVolume(flag: number) {
//     //     this.soundVolume = flag;
//     // }

//     // openMusic() {
//     //     this.setMusicVolume(0.8);
//     //     configuration.instance.setGlobalData('music', 'true');
//     // }

//     // closeMusic() {
//     //     this.setMusicVolume(0);
//     //     configuration.instance.setGlobalData('music', 'false');
//     // }

//     // openSound() {
//     //     this.setSoundVolume(1);
//     //     configuration.instance.setGlobalData('sound', 'true');
//     // }

//     // closeSound() {
//     //     this.setSoundVolume(0);
//     //     configuration.instance.setGlobalData('sound', 'false');
//     // }
    
// }
