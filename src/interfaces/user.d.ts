import { UUID } from "crypto";
import { GENDER, USER_STATUS } from "../configs/constant";

export namespace User {
    interface Me {
        createdAt: string;
        updatedAt: string;
        id: UUID;
        name: string;
        gender: GENDER;
        birthday: string | null;
        email: string;
        password: string;
        phone: string;
        address: string | null;
        user_name: string | null;
        avatar: string | null;
        active: USER_STATUS;
    }

    namespace Register {
        interface Request {
            name: string;
            gender: string;
            birthday: string;
            email: string;
            phone: string;
            address: string;
            password: string;
        }

        interface Response {
            createdAt: string;
            updatedAt: string;
            id: string;
            name: string;
            gender: string;
            birthday: string;
            email: string;
            phone: string;
            address: string;
            userName: string;
            avatar: string;
            active: string;
        }
    }

    namespace Login {
        interface Request {
            email: string;
            password: string;
        }

        interface Response {
            user: Omit<Me, "password">;
            token: string;
        }
    }

    type Update = Omit<Me, "email" | "id">;

    type ForgotPassword = Pick<Me, "email">;

    namespace ResetPassword {
        type Request = Login.Request;
    }
}
