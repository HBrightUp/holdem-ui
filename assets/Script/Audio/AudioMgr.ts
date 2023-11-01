
export class AudioMgr {
    public static readonly Instance: AudioMgr = new AudioMgr()

    private constructor() {
        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.audioEngine.pauseAll()
        })

        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.audioEngine.resumeAll()
        })
    }

    private async loadAudioClip(url: string): Promise<cc.AudioClip> {
        return new Promise(resolve => {
            cc.resources.load<cc.AudioClip>(url, cc.AudioClip, (err, res) => {
                if (err) {
                    resolve(null)
                    return
                }
                resolve(res)
            })
        })
    }

    /**
     * 播放背景音乐
     * @param url
     */
    public async playBGM(url: string) {
        try {
            const audioClip = await this.loadAudioClip('music/' + url)
            audioClip && cc.audioEngine.playMusic(audioClip, true)
        } catch (e) {
            console.error(e)
        }
    }

    /**
     * 播放音效
     * @param url
     */
    public async playSFX(url: string, loop: boolean = false): Promise<number> {
        // if (!globalSetting.effectSound) {
        //     return 0
        // }
        try {
            const audioClip = await this.loadAudioClip('music/' + url)
            return cc.audioEngine.playEffect(audioClip, loop)
        } catch (e) {
            console.error(e)
        }
        return 0
    }

    /**
     * 停止播放音效
     * @param audioID 
     */
    public stopSFX(audioID: number) {
        cc.audioEngine.stopEffect(audioID)
    }

    /**
     * 停止播放所有音效
     * @param audioID 
     */
    public stopAllSFX() {
        cc.audioEngine.stopAllEffects()
    }

    /**
     * 恢复播放所有音效
     */
    public resumAllSFX(){
        cc.audioEngine.resumeAllEffects();
    }
    /**
     * 直接播放
     * @param audio
     */
    public async playSound(audio: string | cc.AudioClip, loop: boolean = false) {
        // if (!globalSetting.effectSound) {
        //     return
        // }

        try {
            if (typeof audio === 'string') {
                audio = audio.replace('.mp3', '')
                const clip = await this.loadAudioClip(audio)
                if (!clip) {
                    console.error('not found audio:' + audio)
                    return
                }
                cc.audioEngine.playEffect(clip, loop)
            } else {
                cc.audioEngine.playEffect(audio, loop)
            }
        } catch (e) {
            console.error(e)
        }
    }

    /**
     * 播放远程音频
     * @param url
     */
    public async playRemoteSound(url: string, loop: boolean = false) {
        if (!url.endsWith('.mp3')) {
            url += '.mp3'
        }

        // if (isGamePreviewMode()) {
        //     url = joinPreviewHTTPBaseURL(url)
        // }

        cc.assetManager.loadRemote<cc.AudioClip>(url, (err, audioClip) => {
            if (err) {
                console.error(err)
            } else {
                this.playSound(audioClip, loop)
            }
        })
    }

    /**
     * 暂停所有正在播放的音频
     */
    public pauseAll() {
        cc.audioEngine.pauseAll()
    }

    /**
     * 恢复所有之前暂停的音频
     */
    public resumeAll() {
        cc.audioEngine.resumeAll()
    }

    // 停止播放所有音效
    public stopAll() {
        cc.audioEngine.stopAll()
    }
}
