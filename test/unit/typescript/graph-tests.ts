/*
 * Copyright DataStax, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Client, graph } from "../../../index";
import GraphResultSet = graph.GraphResultSet;


/*
 * TypeScript definitions compilation tests for metadata module.
 */

async function myTest(client: Client): Promise<any> {
  let result: GraphResultSet;
  let cb = (err: Error, r: GraphResultSet) => {};

  // Promise-based API
  result = await client.executeGraph('g.V()');
  result = await client.executeGraph('g.V(id)', { id: 1});
  result = await client.executeGraph('g.V()', null, { executionProfile: 'ep1' });

  // Callback-based API
  await client.executeGraph('g.V()', cb);
  await client.executeGraph('g.V(id)', { id: 1}, cb);
  await client.executeGraph('g.V()', null, { executionProfile: 'ep1' }, cb);
}