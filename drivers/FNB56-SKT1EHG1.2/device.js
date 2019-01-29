'use strict';

const Homey = require('homey');
const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

class FeibitPlug extends ZigBeeDevice {
  onMeshInit() {

    // this.enableDebug();
    // this.printNode();

	this.registerCapability('onoff', 'genOnOff');

  }
}

module.exports = FeibitPlug;
// http://www.fbeeinside.com/
// https://feibit.manufacturer.globalsources.com/si/6008845863045/pdtl/DC-power/1161085525/Smart-home-ZigBee-socket.htm
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ZigBeeDevice has been inited
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ------------------------------------------
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] Node: ba3a0382-876c-433b-b5b4-a7e901301b59
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] - Battery: false
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] - Endpoints: 0
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] -- Clusters:
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] --- zapp
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] --- genBasic
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- cid : genBasic
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] --- genIdentify
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- cid : genIdentify
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] --- genGroups
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- cid : genGroups
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] --- genScenes
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- cid : genScenes
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] --- genOnOff
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- cid : genOnOff
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:20 [log] [ManagerDrivers] [plug] [0] ---- onOff : 0
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] --- genLevelCtrl
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ---- cid : genLevelCtrl
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] --- genOta
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ---- cid : genOta
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] --- lightLink
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ---- cid : lightLink
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ---- sid : attrs
// 2018-11-29 23:00:21 [log] [ManagerDrivers] [plug] [0] ------------------------------------------
