/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import loading from "./loading"
import start from "./start"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("loading.js",loading);
		reg("start.js",start);
    }
}
GameConfig.width = 640;
GameConfig.height = 1136;
GameConfig.scaleMode ="fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "start.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
