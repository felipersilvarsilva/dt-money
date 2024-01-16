import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction;
    },
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição "
            {...register("description", { required: true })}
            required
          />
          <input
            type="number"
            placeholder="Preço"
            {...register("price", { required: true, valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register("category", { required: true })}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    value="income"
                    variant="income"
                    type="button"
                    disabled={isSubmitting}
                  >
                    <ArrowCircleUp size={24} />
                    <span>Entrada</span>
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    value="outcome"
                    variant="outcome"
                    type="button"
                    disabled={isSubmitting}
                  >
                    <ArrowCircleDown size={24} />
                    <span>Saída</span>
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Cadastrando...</span>
            ) : (
              <span>Cadastrar</span>
            )}
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
