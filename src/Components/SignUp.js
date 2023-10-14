import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Input,
    Button,
    Select,
    SelectItem,
} from "@nextui-org/react";

export default function SignUp() {
    const accountTypes = [
        { label: "Ahorros", value: 1 },
        { label: "Corriente", value: 2 },
    ];

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("REGISTRANDOME!");
    }

    return (
        <form onSubmit={submitHandler} className="max-w-[500px] mx-auto">
            <Card className="bg-blue-950 w-full mx-auto">
                <CardBody className="w-full mx-auto">
                    <Input
                        className="my-5"
                        isRequired
                        type="email"
                        label="Email"
                    />
                    <Input
                        className="my-5"
                        isRequired
                        type="password"
                        label="Contraseña"
                    />
                    <Select label="Tipo de cuenta" className="my-5">
                        {accountTypes.map((accType) => (
                            <SelectItem
                                key={accType.value}
                                value={accType.value}
                            >
                                {accType.label}
                            </SelectItem>
                        ))}
                    </Select>
                </CardBody>
                <Divider className="bg-zinc-600" />
                <CardFooter>
                    <Button
                        type="submit"
                        radius="sm"
                        size="lg"
                        className="bg-blue-200 mx-auto font-bold min-w-[200px]"
                    >
                        Registrarse
                    </Button >
                </CardFooter>
            </Card>
        </form>
    );
}
