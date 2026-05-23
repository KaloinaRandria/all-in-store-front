import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, token } = useSelector((s) => s.auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        if (token) navigate("/articles");
    }, [token, navigate]);

    const onSubmit = async (data) => {
        const result = await dispatch(login(data));
        if (login.fulfilled.match(result)) {
            toast.success("Connexion réussie !");
        } else {
            toast.error(result.payload || "Identifiants invalides");
        }
    };

    return (
        <div className="d-flex vh-100 align-items-center justify-content-center bg-light">
            <div className="card shadow p-4" style={{ width: 380 }}>
                <h4 className="mb-4 text-center fw-bold">All-In Store</h4>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="mb-3">
                        <label className="form-label">Nom d'utilisateur</label>
                        <input
                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            {...register("username", { required: "Champ requis" })}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Mot de passe</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register("password", { required: "Champ requis" })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>
                    <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                        {loading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>
            </div>
        </div>
    );
}