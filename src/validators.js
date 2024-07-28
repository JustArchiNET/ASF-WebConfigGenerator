function isNil(value) {
  return value == null
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return value && typeof value.valueOf() === "string"
}

function checkEmpty(value, required) {
    if (isNil(value) || value === '') {
        if (required) return ['Field required!'];
        else return [];
    }

    return null;
}

function limitedNumber(min, max) {
    return function(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (Array.isArray(value)) {
            for (const entry of value) {
                checkNumber(entry, min, max, err);
            }
        } else {
            checkNumber(value, min, max, err);
        }

        return err;
    };
}

function checkNumber(value, min, max, err) {
    value = Number(value);

    if (!isNumber(value) || isNaN(value)) {
        err.push('Not a valid number!');
    } else {
        if (value > max) err.push('Value too big!');
        else if (value < min) err.push('Value too small!');
    }
}

function limitedString(min, max) {
    return function(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (!isString(value)) {
            err.push('Not a valid string!');
        } else {
            if (value.length > max) err.push('Text too long!');
            else if (value.length < min) err.push('Text too short!');
        }

        return err;
    };
}

export default {
    required(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;
        return [];
    },
    string(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (!isString(value)) err.push('This is not a text!');

        return err;
    },
    botName(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (!isString(value)) err.push('This is not a text!');
        if (value.toUpperCase() === 'ASF') err.push('Using "ASF" as a bot name is not allowed!')

        return err;
    },
    steamid(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        // Range 76561197960265729-76561202255233023
        const re = /^76561[1-2][0-9]{11}$/;
        if (!re.test(value)) err.push('This is not a valid steamid!');

        return err;
    },
    masterClan(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        // Range 103582791429521408-103582795724488703
        const re = /^10358279[1-5][0-9]{9}$/;
        if (!re.test(value)) err.push('This is not a valid clan id!');

        return err;
    },
    parentalPIN(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (!isString(value)) {
            err.push('Not a valid string!');
        } else {
            if (value.length > 4) err.push('Text too long!');
            else if (value.length < 4) err.push('Text too short!');
        }

        value = parseInt(value, 10);

        if (!isNumber(value) || isNaN(value)) {
            err.push('Not a valid number!');
        }

        return err;
    },
    url(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (!isString(value)) {
            err.push('This is not a text!');
        } else {
            try {
                new URL(value);
            } catch {
                err.push('This is not a valid URL!');
            }
        }

        return err;
    },
    uuid(value, schema) {
        const emptyError = checkEmpty(value, schema.required);
        if (!isNil(emptyError)) return emptyError;

        const err = [];

        if (!isString(value)) {
            err.push('This is not a text!');
        } else {
            const regex = /^[0-9a-fA-F]{32}$/;

            if (!regex.test(value)) err.push('This is not a valid UUID!');
        }

        return err;
    },
    tradeToken: limitedString(8, 8),
    byte: limitedNumber(0, 255),
    ushort: limitedNumber(0, 65535),
    uint: limitedNumber(0, 4294967295)
};
