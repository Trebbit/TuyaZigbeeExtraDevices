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

//kijk naar curtain motor als voorbeeld voor het uitlezen van de data
// "ids": {
//     "modelId": "TS0601",
//     "manufacturerName": "_TZE204_dqolcpcp"
//   },
//   "endpoints": {
//     "ieeeAddress": "a4:c1:38:34:ec:2d:73:95",
//     "networkAddress": 40354,
//     "modelId": "TS0601",
//     "manufacturerName": "_TZE204_dqolcpcp",
//     "endpointDescriptors": [
//       {
//         "status": "SUCCESS",
//         "nwkAddrOfInterest": 40354,
//         "_reserved": 20,
//         "endpointId": 1,
//         "applicationProfileId": 260,
//         "applicationDeviceId": 81,
//         "applicationDeviceVersion": 0,
//         "_reserved1": 1,
//         "inputClusters": [
//           4,
//           5,
//           61184,
//           0
//         ],
//         "outputClusters": [
//           25,
//           10
//         ]
//       },
//       {
//         "status": "SUCCESS",
//         "nwkAddrOfInterest": 40354,
//         "_reserved": 10,
//         "endpointId": 242,
//         "applicationProfileId": 41440,
//         "applicationDeviceId": 97,
//         "applicationDeviceVersion": 0,
//         "_reserved1": 0,
//         "inputClusters": [],
//         "outputClusters": [
//           33
//         ]
//       }
//     ],
//     "deviceType": "router",
//     "receiveWhenIdle": true,
//     "capabilities": {
//       "alternatePANCoordinator": false,
//       "deviceType": true,
//       "powerSourceMains": true,
//       "receiveWhenIdle": true,
//       "security": false,
//       "allocateAddress": true
//     },
//     "extendedEndpointDescriptors": {
//       "1": {
//         "clusters": {
//           "groups": {
//             "attributes": [
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 0,
//                 "name": "nameSupport",
//                 "value": {
//                   "type": "Buffer",
//                   "data": [
//                     0
//                   ]
//                 },
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 65533,
//                 "name": "clusterRevision",
//                 "value": 2,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               }
//             ]
//           },
//           "scenes": {
//             "attributes": [
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 0,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 1,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 2,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 3,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 4,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 65533,
//                 "name": "clusterRevision",
//                 "value": 2,
//                 "reportingConfiguration": {
//                   "status": "NOT_FOUND",
//                   "direction": "reported"
//                 }
//               }
//             ]
//           },
//           "basic": {
//             "attributes": [
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 0,
//                 "name": "zclVersion",
//                 "value": 3
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 1,
//                 "name": "appVersion",
//                 "value": 74
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 2,
//                 "name": "stackVersion",
//                 "value": 0
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 3,
//                 "name": "hwVersion",
//                 "value": 1
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 4,
//                 "name": "manufacturerName",
//                 "value": "_TZE204_dqolcpcp"
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 5,
//                 "name": "modelId",
//                 "value": "TS0601"
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 6,
//                 "name": "dateCode",
//                 "value": ""
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 7,
//                 "name": "powerSource",
//                 "value": "mains"
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "writable",
//                   "reportable"
//                 ],
//                 "id": 65502
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 65533,
//                 "name": "clusterRevision",
//                 "value": 2
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 65534,
//                 "name": "attributeReportingStatus",
//                 "value": "PENDING"
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 65506
//               },
//               {
//                 "acl": [
//                   "readable",
//                   "reportable"
//                 ],
//                 "id": 65507
//               }
//             ]
//           }
//         },
//         "bindings": {
//           "ota": {},
//           "time": {
//             "attributes": [
//               {
//                 "acl": [
//                   "readable"
//                 ],
//                 "id": 65533,
//                 "name": "clusterRevision",
//                 "value": 1
//               }
//             ]
//           }
//         }
//       },
//       "242": {
//         "clusters": {},
//         "bindings": {}
//       }
//     }
//   }