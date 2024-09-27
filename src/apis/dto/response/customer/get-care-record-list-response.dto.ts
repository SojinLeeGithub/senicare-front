// interface : get care record response body dto //

import { extend } from "dayjs";
import ResponseDto from "../response.dto";
import { CareRecord } from "src/types";

export default interface GetCareRecordResponseDto extends ResponseDto {
    careRecords: CareRecord[];
}
