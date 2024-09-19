'use strict';

const Homey = require('homey');
const { ZigBeeDevice } = require('homey-zigbeedriver');
const { debug, CLUSTER } = require('zigbee-clusters');

class relay_board_12_channel extends ZigBeeDevice {

    async onNodeInit({zclNode}) {

        this.printNode();

        const { subDeviceId } = this.getData();
        this.log("Device data: ", subDeviceId);

        let options = {};

        switch (subDeviceId){
            case 'secondSwitch':
                options.endpoint = 2;
                break;
            case 'thirdSwitch':
                options.endpoint = 3;
                break;
            case 'fourthSwitch':
                options.endpoint = 4;
                break;            
            case 'fifthSwitch':
                options.endpoint = 5;
                break;
            case 'sixthSwitch':
                options.endpoint = 6;
                break;
            case 'seventhSwitch':
                options.endpoint = 7;
                break;
            case 'eighthSwitch':
                options.endpoint = 8;
                break;
            case 'ninthSwitch':
                options.endpoint = 9;
                break;
            case 'tenthSwitch':
                options.endpoint = 10;
                break;
            case 'eleventhSwitch':
                options.endpoint = 11;
                break;
            case 'twelfthSwitch':
                options.endpoint = 12;
                break;
            default:
                options.endpoint = 1;
                break;
        }

        this.registerCapability('onoff', CLUSTER.ON_OFF, options);

        await zclNode.endpoints[1].clusters.basic.readAttributes('manufacturerName', 'zclVersion', 'appVersion', 'modelId', 'powerSource', 'attributeReportingStatus')
        .catch(err => {
            this.error('Error when reading device attributes ', err);
        });

    }

    onDeleted(){
		this.log("12 Channel Relay Board, channel ", subDeviceId, " removed")
	}

}

module.exports = relay_board_12_channel;