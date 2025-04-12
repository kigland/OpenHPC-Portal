/* tslint:disable */
/* eslint-disable */
/**
 * OpenHPC
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VMReq
 */
export interface VMReq {
    /**
     * 
     * @type {string}
     * @memberof VMReq
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof VMReq
     */
    owner: string;
    /**
     * 
     * @type {string}
     * @memberof VMReq
     */
    project: string;
    /**
     * 
     * @type {boolean}
     * @memberof VMReq
     */
    enableRds: boolean;
    /**
     * 
     * @type {string}
     * @memberof VMReq
     */
    rdsFolder: string;
    /**
     * 
     * @type {number}
     * @memberof VMReq
     */
    shm: number;
}

/**
 * Check if a given object implements the VMReq interface.
 */
export function instanceOfVMReq(value: object): value is VMReq {
    if (!('provider' in value) || value['provider'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    if (!('project' in value) || value['project'] === undefined) return false;
    if (!('enableRds' in value) || value['enableRds'] === undefined) return false;
    if (!('rdsFolder' in value) || value['rdsFolder'] === undefined) return false;
    if (!('shm' in value) || value['shm'] === undefined) return false;
    return true;
}

export function VMReqFromJSON(json: any): VMReq {
    return VMReqFromJSONTyped(json, false);
}

export function VMReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): VMReq {
    if (json == null) {
        return json;
    }
    return {
        
        'provider': json['provider'],
        'owner': json['owner'],
        'project': json['project'],
        'enableRds': json['enable_rds'],
        'rdsFolder': json['rds_folder'],
        'shm': json['shm'],
    };
}

export function VMReqToJSON(json: any): VMReq {
    return VMReqToJSONTyped(json, false);
}

export function VMReqToJSONTyped(value?: VMReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'provider': value['provider'],
        'owner': value['owner'],
        'project': value['project'],
        'enable_rds': value['enableRds'],
        'rds_folder': value['rdsFolder'],
        'shm': value['shm'],
    };
}

