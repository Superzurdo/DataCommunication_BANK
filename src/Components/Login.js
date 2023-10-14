import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    Input,
    Button,
} from "@nextui-org/react";

export default function Login() {

    const navigate = useNavigate();
    //use reducer like in homehero is easier and maneuvrable than useState
    const submitHandler = (e) => {
        e.prevertDefault();
        //use regex for validation
        //axios to register
        //axios to login (for token)
        navigate('/Bank_Info',{replace:true});
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col gap-4 mx-auto">
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
                </CardBody>
                <Divider className="bg-zinc-600" />
                <CardFooter>
                    <Button radius="sm" size="lg" className="bg-blue-200 mx-auto font-bold min-w-[200px]">Login</Button>
                </CardFooter>
            </Card>
        </form>
    );
}
