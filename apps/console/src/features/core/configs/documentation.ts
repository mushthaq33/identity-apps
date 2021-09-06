/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// DO NOT SHORTEN THE IMPORT PATH as it could lead to circular dependencies.
import { DocumentationLinksExtension } from "../../../extensions/configs";
import { DocumentationLinksInterface } from "../models";

/**
 * Get all the Features documentation links.
 *
 * @return {DocumentationLinksInterface}
 */
export const DocumentationLinks: DocumentationLinksInterface = {
    ...DocumentationLinksExtension
};