import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TansactionsContainer,
  TansactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });
  return (
    <div>
      <Header />
      <Summary />
      <TansactionsContainer>
        <SearchForm />
        <TansactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TansactionsTable>
      </TansactionsContainer>
    </div>
  );
}
