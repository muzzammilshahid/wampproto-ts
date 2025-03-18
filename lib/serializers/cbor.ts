import {encode, decode} from 'cbor-redux';

import {Message} from "../messages/message";
import {Serializer, ToMessage} from "./serializer";


class CBORSerializer implements Serializer {
    serialize(message: Message): Uint8Array {
        return new Uint8Array(encode(message.marshal()));
    }

    deserialize(data: Uint8Array): Message {
        const buffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
        const wampMsg: any[] = decode(buffer);
        return ToMessage(wampMsg);
    }
}

export {
    CBORSerializer
}
