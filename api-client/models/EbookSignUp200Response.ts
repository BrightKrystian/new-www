/* tslint:disable */
/* eslint-disable */
/**
 * Bright Website API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EbookSignUp200ResponseEbook } from './EbookSignUp200ResponseEbook';
import {
    EbookSignUp200ResponseEbookFromJSON,
    EbookSignUp200ResponseEbookFromJSONTyped,
    EbookSignUp200ResponseEbookToJSON,
} from './EbookSignUp200ResponseEbook';

/**
 * 
 * @export
 * @interface EbookSignUp200Response
 */
export interface EbookSignUp200Response {
    /**
     * 
     * @type {EbookSignUp200ResponseEbook}
     * @memberof EbookSignUp200Response
     */
    ebook: EbookSignUp200ResponseEbook;
}

/**
 * Check if a given object implements the EbookSignUp200Response interface.
 */
export function instanceOfEbookSignUp200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ebook" in value;

    return isInstance;
}

export function EbookSignUp200ResponseFromJSON(json: any): EbookSignUp200Response {
    return EbookSignUp200ResponseFromJSONTyped(json, false);
}

export function EbookSignUp200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EbookSignUp200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ebook': EbookSignUp200ResponseEbookFromJSON(json['ebook']),
    };
}

export function EbookSignUp200ResponseToJSON(value?: EbookSignUp200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ebook': EbookSignUp200ResponseEbookToJSON(value.ebook),
    };
}

