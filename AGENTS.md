<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Furai experience in a single index route with semantic section anchors; its narrative is one continuous page.
- Centralize business facts and photography in `src/lib/furai.ts`; official information must remain consistent across content and structured data.
- Keep reservation validation and WhatsApp message construction in a browser-safe pure module, with ephemeral component state only; requests must not persist or simulate confirmed bookings.
- Use CSS tokens and editorial Button variants for the visual system, and native CSS intersection reveals; this keeps styling coherent without an animation dependency.
