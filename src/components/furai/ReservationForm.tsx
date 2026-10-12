import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localDate, occasions, spaces, reservationSchema, reservationUrl } from "@/lib/reservation";

const initialValues = { name: "", date: "", time: "", guests: "", occasion: "", space: "", message: "" };
type Field = keyof typeof initialValues;
export function ReservationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState("");
  const change = (field: Field, value: string) => { setValues(prev => ({ ...prev, [field]: value })); setStatus(""); };
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = reservationSchema().safeParse(values);
    if (!result.success) {
      const nextErrors: Partial<Record<Field, string>> = {};
      result.error.issues.forEach(issue => { const field = issue.path[0] as Field; if (!nextErrors[field]) nextErrors[field] = issue.message; });
      setErrors(nextErrors); setStatus("");
      const first = Object.keys(nextErrors)[0];
      if (first) document.getElementById(`reservation-${first}`)?.focus();
      return;
    }
    setErrors({});
    window.open(reservationUrl(result.data), "_blank", "noopener,noreferrer");
    setStatus("Continúa la conversación por WhatsApp para confirmar tu solicitud.");
  }
  const attributes = (field: Field) => ({ id: `reservation-${field}`, name: field, value: values[field], "aria-invalid": Boolean(errors[field]), "aria-describedby": errors[field] ? `error-${field}` : undefined, onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => change(field, event.target.value) });
  const error = (field: Field) => errors[field] ? <p className="error" id={`error-${field}`} role="alert">{errors[field]}</p> : null;
  return <form className="reservation-form" noValidate onSubmit={submit}>
    <div className="field field-wide"><label htmlFor="reservation-name">Nombre *</label><input {...attributes("name")} maxLength={100} autoComplete="name" placeholder="Tu nombre" required />{error("name")}</div>
    <div className="field"><label htmlFor="reservation-date">Fecha deseada *</label><input {...attributes("date")} type="date" min={localDate()} required />{error("date")}</div>
    <div className="field"><label htmlFor="reservation-time">Hora deseada *</label><input {...attributes("time")} type="time" required />{error("time")}</div>
    <div className="field"><label htmlFor="reservation-guests">Número de personas *</label><input {...attributes("guests")} type="number" min="1" step="1" placeholder="2" required />{error("guests")}</div>
    <div className="field"><label htmlFor="reservation-occasion">Ocasión *</label><select {...attributes("occasion")} required><option value="">Selecciona</option>{occasions.map(value => <option key={value}>{value}</option>)}</select>{error("occasion")}</div>
    <div className="field field-wide"><label htmlFor="reservation-space">Preferencia de espacio *</label><select {...attributes("space")} required aria-describedby={errors.space ? "error-space space-hint" : "space-hint"}><option value="">Selecciona tu preferencia</option>{spaces.map(value => <option key={value}>{value}</option>)}</select>{error("space")}<p className="hint" id="space-hint">Sujeta a confirmación del restaurante. La hora elegida no implica disponibilidad.</p></div>
    <div className="field field-wide"><label htmlFor="reservation-message">Mensaje adicional <span className="text-light-muted">(opcional)</span></label><textarea {...attributes("message")} maxLength={1000} placeholder="¿Hay algo que quieras contarnos?" />{error("message")}</div>
    <div className="field-wide"><Button type="submit" variant="editorial" className="reservation-submit">Preparar reserva por WhatsApp <ArrowUpRight /></Button><p className="reservation-status" role="status">{status}</p></div>
  </form>;
}