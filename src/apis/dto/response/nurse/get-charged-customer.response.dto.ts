import { ChargedCustomer } from "src/types";
import ResponseDto from "../response.dto";

// interface : get chared customer response body dto //
export default interface GetChargedCustomerResponseDto extends ResponseDto {
    customers: ChargedCustomer[];
}