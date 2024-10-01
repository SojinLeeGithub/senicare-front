// interface : get care record response body dto //

import ResponseDto from "../response.dto";
import { CareRecord } from "src/types";

export default interface GetCareRecordResponseDto extends ResponseDto {
    careRecords: CareRecord[];
}
