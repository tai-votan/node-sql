import { UUID } from "crypto";

export namespace JWT {
    interface Payload {
        email: string;
        id: UUID;
        password: string;
    }
}
