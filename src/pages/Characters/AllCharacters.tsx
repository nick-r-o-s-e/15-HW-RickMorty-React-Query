import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { getCharactersPage } from "../../api/api";
import CharacterType from "../../types/CharacterType";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import SmallCard from "../../components/SmallCard/SmallCard";
import Pagination from "../../components/Pagination/Pagination";
import PageInfo from "../../types/PageInfo";

type AllCharactersResponse = {
  info: PageInfo;
  results: CharacterType[];
};

function AllCharacters() {
  let [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  const [paginationDisabled, setPaginationDisabled] = useState({
    next: false,
    prev: true,
  });

  const { data, isLoading } = useQuery<AllCharactersResponse>(
    ["allCharacters", searchParams.get("page")],
    ({ queryKey }) => getCharactersPage(queryKey)
  );

  useEffect(() => {
    if (searchParams.get("page") == "1") {
      setPaginationDisabled({
        next: false,
        prev: true,
      });
    } else if (searchParams.get("page") == "42") {
      setPaginationDisabled({
        next: true,
        prev: false,
      });
    } else {
      setPaginationDisabled({
        next: false,
        prev: false,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <TailSpin
          height="200"
          width="200"
          color="#00bdbd"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (!data) {
    return <h1 className="page-title">Something went wrong</h1>;
  }
  const { info, results: characters } = data;

  return (
    <div className="container">
      <Pagination
        disabledStates={paginationDisabled}
        info={info}
        page={searchParams.get("page")}
        setSearchParams={setSearchParams}
      />

      <div className="container__characters">
        {characters!.map(({ id, image, name, status }: CharacterType) => {
          return (
            <Link key={id} to={`/characters/${id}`}>
              <SmallCard image={image} name={name} status={status} />
            </Link>
          );
        })}
      </div>
      <Pagination
        disabledStates={paginationDisabled}
        info={info}
        page={searchParams.get("page")}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}

export default AllCharacters;
