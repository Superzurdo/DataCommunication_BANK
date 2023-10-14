import { useReducer, useState } from "react";
import FormatMoney from "../Functions/FormatMoney";
import {
    Tabs,
    Tab,
    Input,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@nextui-org/react";

//CHARGE HERE THE DATA WITH A MAP FUNCTION
/**
 * cosnt getTypeTransaction = (typeTransaction) => {
 *      if(typeTransaction === 'withdraw') return 'RETIRO'
 *      if(typeTransaction === 'deposit') return 'DEPOSITO'
 *      else return 'TRANSACCION'
 * }
 * 
 * conts rows = REQUEST_RESULT_OBJET_ARRAY.map((Transaction) => { //The values are the names in BD
 *      key: idTransaction,
        type: getTypeTransaction(typeTransaction),
        value: FormatMoney(QuantityMoneyTransaction),
        destiny: destinyTransaction,
        status: statusTransaction,
        dateTransaction: formatedSinceBD_DateTransaction
 * });
 * 
*/
const rows = [
    {
        key: "1",
        type: "Retiro",
        value: FormatMoney("25000"),
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00", //Is Better to pass from BD in this format insted of trying to format in JS
    },
    {
        key: "2",
        type: "Transaccion",
        value: FormatMoney("35000"),
        destiny: "1234567890",
        status: "Completado",
        dateTransaction: "22/10/2023 16:00",
    },
    {
        key: "3",
        type: "Deposito",
        value: "50000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/08/2023 6:00",
    },
    {
        key: "4",
        type: "Retiro",
        value: "2500000",
        destiny: "----",
        status: "Error",
        dateTransaction: "11/11/2023 23:00",
    },
    {
        key: "5",
        type: "Retiro",
        value: "300000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "11/11/2023 23:05",
    },
    {
        key: "6",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "7",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "8",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "9",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "10",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "11",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "12",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "13",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "14",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "15",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "16",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "17",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "18",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "19",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "20",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "21",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
    {
        key: "22",
        type: "Retiro",
        value: "25000",
        destiny: "----",
        status: "Completado",
        dateTransaction: "20/10/2023 16:00",
    },
];

const columns = [
    {
        key: "key",
        label: "#",
    },
    {
        key: "type",
        label: "Tipo de Transacción",
    },
    {
        key: "value",
        label: "Cantidad",
    },
    {
        key: "destiny",
        label: "Destino",
    },
    {
        key: "status",
        label: "Estado",
    },
    {
        key: "dateTransaction",
        label: "Fecha",
    },
];

export default function BankInfo() {
    const [selected, setSelected] = useState("deposit"); //for select NEXT UI component
    //CHARGE HERE THE USER INFO
    const userInfo = {
        email: "DummyBro@Example.com",
        accountNumber: "1213235657",
        accountType: "Ahorros",
        quantityMoney: "320000",
    };

    //#region DATA ABOUT ACTIONS
    //inputValue useState
    const [inputValue, setInputValue] = useState();
    const [destinyAccount, setDestinyAccount] = useState();
    //onChange iniputValue function Handler
    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    };
    //onChange destinyAccount function Handler
    const destinyAccountHandler = (e) => {
        setDestinyAccount(e.target.value);
    }
    //THIS IS THE SUBMIT FUNCTION OF 'RETIRAR' ACTION
    const sumbitTransactionHandler = (e) => {
        e.preventDefault();
        /**
         * 1.A. Verify inputValue -> if(inputValue > 0 && inputValue <= quantityMoney <- [the user amount money])
         * 1.B. if(selected === 'transaction') { Verify destinyAccount existance and not_Self_Number_Account}
         * 2. SHOW ERRORs to the view if exist and error
         * 3. const data = {typeTransaction: selected, amount: inputValue,destinyAccount: destinyAccount <-[if_Transaction]}
         * 4. encrypt with encryptData function provided by GPT <3 JAJAJAJAJA -> const dataEncrypted = encryptData(data)
         * 5. call axios to post the new transaction -> const response = axios.post({url},{dataEncrypted})
         * 6. SHOW ERRORS OR REFRESH TRANSCATION DATA AND TRANSACTIONS TABLE
         */
    };
    //#endregion
    return (
        <div className="flex gap-10 justify-evenly w-full h-auto py-[25px] bg-gray-900">
            <div className="flex-col">
                <Card className="bg-blue-400 max-w-[420px] h-[440px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="account info logo"
                            height={60}
                            radius="md"
                            src="https://cdn-icons-png.flaticon.com/512/300/300220.png"
                            width={60}
                        />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold">
                                INFORMACION DE LA CUENTA
                            </p>
                            <p className="text-small font-semibold text-stone-700">
                                M3J BANK
                            </p>
                        </div>
                    </CardHeader>
                    <Divider className="bg-blue-500" />
                    <CardBody>
                        <div className="flex flex-col pb-5">
                            <p className="text-lg font-semibold">EMAIL</p>
                            <p className="text-md font-semibold text-blue-700">
                                {userInfo.email}
                            </p>
                        </div>
                        <div className="flex flex-col pb-5">
                            <p className="text-lg font-semibold">
                                TIPO DE CUENTA
                            </p>
                            <p className="text-md font-semibold text-blue-700">
                                {userInfo.accountType}
                            </p>
                        </div>
                        <div className="flex flex-col pb-2">
                            <p className="text-lg font-semibold">
                                NUMERO DE CUENTA
                            </p>
                            <p className="text-md font-semibold text-blue-700">
                                {userInfo.accountNumber}
                            </p>
                        </div>
                    </CardBody>
                    <Divider className="bg-blue-500" />
                    <CardFooter>
                        <div className="flex flex-col ps-2 py-3">
                            <p className="text-xl font-bold">MONTO</p>
                            <p className="text-xl font-bold text-blue-800">
                                {FormatMoney(userInfo.quantityMoney)}
                            </p>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="bg-blue-400 mt-5 max-w-full w-[400px]">
                    <CardBody className="overflow-hidden">
                        <Tabs
                            color="primary"
                            fullWidth
                            size="lg"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                        >
                            <Tab key="deposit" title="Depositar">
                                <form onSubmit={sumbitTransactionHandler} className="flex flex-col gap-4">
                                    <Input
                                        onChange={inputValueHandler}
                                        className="mt-5"
                                        isRequired
                                        color="primary"
                                        label="Monto"
                                        type="number"
                                    />
                                    <div className="flex gap-2 justify-end">
                                        <Button
                                            fullWidth
                                            color="primary"
                                            size="lg"
                                            className="font-semibold text-md"
                                        >
                                            Depositar
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="transfer" title="Transferir">
                                <form onSubmit={sumbitTransactionHandler} className="flex flex-col gap-4">
                                    <Input
                                        onChange={inputValueHandler}
                                        className="mt-5"
                                        isRequired
                                        color="primary"
                                        label="Monto"
                                        type="number"
                                    />
                                    <Input
                                        onChange={destinyAccountHandler}
                                        isRequired
                                        color="primary"
                                        label="Numero de cuenta de destino"
                                        type="number"
                                    />
                                    <div className="flex gap-2 justify-end">
                                        <Button
                                            fullWidth
                                            color="primary"
                                            size="lg"
                                            className="font-semibold text-md"
                                        >
                                            Transferir
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="withdraw" title="Retirar">
                                <form
                                    onSubmit={sumbitTransactionHandler}
                                    className="flex flex-col gap-4"
                                >
                                    <Input
                                        onChange={inputValueHandler}
                                        className="mt-5"
                                        isRequired
                                        color="primary"
                                        label="Monto"
                                        type="number"
                                    />
                                    <div className="flex gap-2 justify-end">
                                        <Button
                                            fullWidth
                                            color="primary"
                                            size="lg"
                                            className="font-semibold text-md"
                                        >
                                            Retirar
                                        </Button>
                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
            <div className="flex-col">
                <Table
                    className="w-[900px] h-[93vh]"
                    isHeaderSticky
                    aria-label="Example table with dynamic content"
                >
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.key}>
                                {column.label}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => (
                                    <TableCell>
                                        {getKeyValue(item, columnKey)}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
