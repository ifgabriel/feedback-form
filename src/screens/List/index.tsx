import useGetFeedbacks from "../../services/useGetFeedbacks";

const handleFeedbackRating = (rating: number) => {

  const ratings: Record<number, string> = {
    0: "Muito ruim",
    1: "Ruim",
    2: "Bom",
    3: "Muito Bom",
    4: "Excelente",
  };

  return ratings[rating];
};

const List = () => {
  const { data } = useGetFeedbacks()

  return (
    <main className="container mx-auto rounded-md bg-white px-10 py-8">
      <h1 className="mb-12 mt-6 text-center text-3xl font-medium text-slate-800">
        Lista de todos os feedbacks
      </h1>
      <ul className="flex flex-col gap-6">
        {data?.map((feedback) => (
          <li
            className="flex items-start gap-6 rounded p-6 border-b-slate-100 [&:not(:last-child)]:border-b"
            key={feedback.id}
          >
            <img
              className="h-20 w-20 rounded object-cover"
              src={feedback.image}
              alt=""
            />
            <div>
              <h3 className="text-lg font-medium text-slate-950">
                {feedback.productName}
              </h3>
              <small className="font-bold text-xs text-slate-900 text-yellow-500">
                {handleFeedbackRating(feedback.feedback)}
              </small>
              <p className="bold mt-2 text-sm text-slate-600">
                {feedback.comment}{" "}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default List;
