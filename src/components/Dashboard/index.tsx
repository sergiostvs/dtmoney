import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard () {
    return(
        <div>
            <Container>
                <Summary/>
                <TransactionsTable/>
            </Container>
        </div>
    );
}