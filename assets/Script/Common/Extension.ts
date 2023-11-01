declare namespace cc.AssetManager {
    interface Bundle {
        loadAsync<T extends cc.Asset>(
            paths: string,
            type: typeof cc.Asset
        ): Promise<T>
    }
}

cc.AssetManager.Bundle.prototype['loadAsync'] = async function <
    T extends cc.Asset
>(
    this: cc.AssetManager.Bundle,
    paths: string,
    type: typeof cc.Asset
): Promise<T> {
    return new Promise(resolve => {
        this.load<T>(paths, type, (err, assets) => {
            if (err) {
                console.error('loadAsync fail:', err)
                resolve(null)
                return
            }
            resolve(assets)
        })
    })
}

declare namespace cc {
    interface Component {
        execute<T>(promise: Promise<T>): Promise<T>
    }
}

cc.Component.prototype['execute'] = function <T>(
    promise: Promise<T>
): Promise<T> {
    return new Promise((resolve, reject) => {
        promise
            .then((value: T) => {
                if (cc.isValid(this)) {
                    resolve(value)
                }
            })
            .catch(reason => {
                if (cc.isValid(this)) {
                    reject(reason)
                }
            })
    })
}
