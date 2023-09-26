package com.backend.eventify;

import java.util.List;

public interface EventoRepository extends JpaRepository<Evento, Long> {

    Evento save(Evento evento);
    // Você pode adicionar consultas personalizadas aqui, se necessário

    List<Evento> findAll();
}
