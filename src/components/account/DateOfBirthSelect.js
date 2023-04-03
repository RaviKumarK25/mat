import { useField } from "formik";
import { useMediaQuery } from "react-responsive";

export default function DateOfBirthSelect({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError,
  ...props
}) {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });

  const [field, meta] = useField(props);

  return (
    <>
      <div
        class="grid lg:grid-cols-3 gap-2"
        style={{ marginBottom: `${dateError && !view3 ? "90px" : "0"}` }}
      >
        <select
          name="bDay"
          value={bDay}
          onChange={handleRegisterChange}
          className={
            meta.touched && meta.error
              ? "with-border myInputStyl"
              : "with-border myInputStyl"
          }
        >
          {days.map((day, i) => (
            <option value={day} key={i}>
              {day}
            </option>
          ))}
        </select>
        <select
          name="bMonth"
          value={bMonth}
          onChange={handleRegisterChange}
          className={
            meta.touched && meta.error
              ? "with-border myInputStyl"
              : "with-border myInputStyl"
          }
        >
          {months.map((month, i) => (
            <option value={month} key={i}>
              {month}
            </option>
          ))}
        </select>
        <select
          name="bYear"
          value={bYear}
          onChange={handleRegisterChange}
          className={
            meta.touched && meta.error
              ? "with-border myInputStyl"
              : "with-border myInputStyl"
          }
        >
          {years.map((year, i) => (
            <option value={year} key={i}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {dateError && (
        <div
          className={
            !view3 ? "input_error" : "input_error input_error_select_large"
          }
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {dateError}
        </div>
      )}
    </>
  );
}
