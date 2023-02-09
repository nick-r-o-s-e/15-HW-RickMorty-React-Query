import PageInfo from "../../types/PageInfo";
import "./Pagination.scss"

interface Props {
  disabledStates: { next: boolean; prev: boolean };
  info: PageInfo;
  setSearchParams: Function;
  page: string | null;
}

function Pagination({ disabledStates, info, page, setSearchParams }: Props) {
  return (
    <div className="pagination">
      <button
        disabled={disabledStates.prev}
        onClick={() => {
          const pageParam = info.prev?.split("?")[1] || "page=1";

          setSearchParams(pageParam);
        }}
      >
        &#8656; Prev
      </button>
      <h1>Page: {page}/42</h1>
      <button
        disabled={disabledStates.next}
        onClick={() => {
          const pageParam = info.next?.split("?")[1] || "page=42";
          setSearchParams(() => {
            return pageParam;
          });
        }}
      >
        Next &#8658;
      </button>
    </div>
  );
}

export default Pagination;
