var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-sets-of-real-numbers",
  "level": "1",
  "url": "sec-sets-of-real-numbers.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets of Real Numbers",
  "body": " Sets of Real Numbers   We use to denote the set of real numbers. For and , we define:       In particular, .  Some subsets of that we will encounter often are:   The set of natural numbers  The set of integers .  The set of rational numbers .     Bounded Subsets of  A real number is an upper bound upper bound (resp. a lower bound lower bound ) of a set if (resp. ) for every . Note that is an upper bound of if and only if is a lower bound of .  A set is bounded above bounded above (resp. bounded below bounded below ) if it has an upper bound (resp. a lower bound). We say is bounded bounded if it is both bounded above and bounded below.     The interval is bounded; for example, it is bounded above by and bounded below by .  The set is bounded above, for example by , but not bounded below.   is neither bounded below nor above.  Every real number is both an upper bound and a lower bound of the empty set .     If is an upper bound of , then it is also an upper bound of every subset of . Consequently, an arbitrary intersection of sets bounded above is again bounded above. Suppose and are bounded above by and , respectively. Then is bounded above by . Thus, a finite union of sets bounded above is bounded above.  Likewise, the collection of subsets of that are bounded below (resp. bounded) is closed under arbitrary intersection and finite union. In particular, every finite set of real numbers is bounded.    A set is bounded if and only if there exists such that .    One implication is immediate: if , then is bounded. For the other implication, suppose is bounded. Then so is . Hence is bounded above, say by . Then for all , so .    A supremum supremum of a set , denoted by , is the least upper bound of . In other words, if is an upper bound of and for every upper bound of . Dually, an infimum infimum of , denoted by , is the greatest lower bound of . In other words, if is a lower bound of and every lower bound of is at most . It is clear that (likewise ), if it exists, is unique.  A useful reformulation is: if and only if is an upper bound of and for every there exists with .     The set of upper bounds and the set of lower bounds of are and , respectively. Hence and .  The set of upper bounds and the set of lower bounds of are and the empty set, respectively. Hence and does not exist.   has neither a supremum nor an infimum.  The set of upper bounds and the set of lower bounds of are both . Conventionally, we write and . Note that neither nor exists in .      "
},
{
  "id": "subsec-bounded-subsets-2",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper bound lower bound "
},
{
  "id": "subsec-bounded-subsets-3",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bounded above bounded below bounded "
},
{
  "id": "eg-bounded-subsets-examples",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#eg-bounded-subsets-examples",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "   The interval is bounded; for example, it is bounded above by and bounded below by .  The set is bounded above, for example by , but not bounded below.   is neither bounded below nor above.  Every real number is both an upper bound and a lower bound of the empty set .    "
},
{
  "id": "prop-bounded-iff-abs-bound",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#prop-bounded-iff-abs-bound",
  "type": "Proposition",
  "number": "1.1.2",
  "title": "",
  "body": "  A set is bounded if and only if there exists such that .    One implication is immediate: if , then is bounded. For the other implication, suppose is bounded. Then so is . Hence is bounded above, say by . Then for all , so .   "
},
{
  "id": "subsec-bounded-subsets-8",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supremum infimum "
},
{
  "id": "eg-inf-and-sup",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#eg-inf-and-sup",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "   The set of upper bounds and the set of lower bounds of are and , respectively. Hence and .  The set of upper bounds and the set of lower bounds of are and the empty set, respectively. Hence and does not exist.   has neither a supremum nor an infimum.  The set of upper bounds and the set of lower bounds of are both . Conventionally, we write and . Note that neither nor exists in .    "
},
{
  "id": "sec-completeness-axiom",
  "level": "1",
  "url": "sec-completeness-axiom.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Completeness Axiom",
  "body": " The Completeness Axiom   The following axiom is what sets the real field apart from other ordered fields.   The Completeness Axiom of   Every non-empty set of real numbers that is bounded above has a supremum in .    For an ordered set, the least upper bound property  least upper bound property means: every non-empty subset that is bounded above has a least upper bound (that is, a supremum) in the set. So the completeness axiom says that , with its usual order, has the least upper bound property.    Consequences    The completeness axiom of is equivalent to: every non-empty subset of that is bounded below has an infimum in .    Let be non-empty and bounded below. Then is non-empty and bounded above, so exists. We claim . For , we have , hence , so . Thus is a lower bound of . If is any lower bound of , then is an upper bound of , so , i.e. . Therefore is the greatest lower bound of .  Conversely, assume every non-empty bounded-below subset of has an infimum. Let be non-empty and bounded above. Then is non-empty and bounded below, so exists. The same argument shows . Hence the least upper bound property holds.      Suppose and that is bounded above. Show that       The set is not bounded above in .    Suppose were bounded above. By the least upper bound property, exists. Since , the number cannot be an upper bound of . So there is with . Then , and , contradicting that is an upper bound.     Existence of Positive Square Roots   For each , there exists a unique such that .    Uniqueness is immediate because is strictly increasing on .  For existence, define . The set is non-empty: if , then ; if , then . It is bounded above by , since implies . By completeness, exists.  If , then for sufficiently small , we still have , so , contradicting that is an upper bound of . If , then for sufficiently small , ; then every satisfies , so is an upper bound of , contradicting leastness of . Hence .    A standard comparison example is the ordered field : the set is non-empty and bounded above in , but it has no supremum in . Therefore does not satisfy the least upper bound property.   "
},
{
  "id": "ax-least-upper-bound-property",
  "level": "2",
  "url": "sec-completeness-axiom.html#ax-least-upper-bound-property",
  "type": "Axiom",
  "number": "1.2.1",
  "title": "The Completeness Axiom of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " The Completeness Axiom of   Every non-empty set of real numbers that is bounded above has a supremum in .   "
},
{
  "id": "sec-completeness-axiom-2-3",
  "level": "2",
  "url": "sec-completeness-axiom.html#sec-completeness-axiom-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property "
},
{
  "id": "prop-completeness-infimum-equivalent",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-completeness-infimum-equivalent",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "",
  "body": "  The completeness axiom of is equivalent to: every non-empty subset of that is bounded below has an infimum in .    Let be non-empty and bounded below. Then is non-empty and bounded above, so exists. We claim . For , we have , hence , so . Thus is a lower bound of . If is any lower bound of , then is an upper bound of , so , i.e. . Therefore is the greatest lower bound of .  Conversely, assume every non-empty bounded-below subset of has an infimum. Let be non-empty and bounded above. Then is non-empty and bounded below, so exists. The same argument shows . Hence the least upper bound property holds.   "
},
{
  "id": "ex-sec-completeness-sup-monotone",
  "level": "2",
  "url": "sec-completeness-axiom.html#ex-sec-completeness-sup-monotone",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose and that is bounded above. Show that    "
},
{
  "id": "prop-n-unbounded-above",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-n-unbounded-above",
  "type": "Proposition",
  "number": "1.2.4",
  "title": "",
  "body": "  The set is not bounded above in .    Suppose were bounded above. By the least upper bound property, exists. Since , the number cannot be an upper bound of . So there is with . Then , and , contradicting that is an upper bound.   "
},
{
  "id": "thm-positive-square-root-existence",
  "level": "2",
  "url": "sec-completeness-axiom.html#thm-positive-square-root-existence",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Existence of Positive Square Roots.",
  "body": " Existence of Positive Square Roots   For each , there exists a unique such that .    Uniqueness is immediate because is strictly increasing on .  For existence, define . The set is non-empty: if , then ; if , then . It is bounded above by , since implies . By completeness, exists.  If , then for sufficiently small , we still have , so , contradicting that is an upper bound of . If , then for sufficiently small , ; then every satisfies , so is an upper bound of , contradicting leastness of . Hence .   "
},
{
  "id": "ex-ch1",
  "level": "1",
  "url": "ex-ch1.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "Exercises",
  "body": " Exercises    Let . Find all upper bounds of and all lower bounds of . Is bounded?      Give an example of bounded sets ( ) such that is not bounded. Give an example of two non-empty sets bounded above whose intersection is empty.      For each set, decide whether it is an interval. Justify your answer.            Compute the intersection of the two intervals and , and express your answer in interval notation.      Give one example of two intervals whose union is an interval, and one example of two intervals whose union is not an interval.      Let . Define by , where and . Show that is a bijection.      Is each of the following sets finite, countably infinite, or uncountable?            Prove that the least upper bound property is equivalent to: every non-empty subset of that is bounded below has an infimum.      Prove that is not bounded above in .      Let . Show that is non-empty and bounded above in , but has no supremum in .    "
},
{
  "id": "ex-ch1-upper-lower-bounds",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-upper-lower-bounds",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Let . Find all upper bounds of and all lower bounds of . Is bounded?   "
},
{
  "id": "ex-ch1-union-intersection-bounded",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-union-intersection-bounded",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Give an example of bounded sets ( ) such that is not bounded. Give an example of two non-empty sets bounded above whose intersection is empty.   "
},
{
  "id": "ex-ch1-interval-membership",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-interval-membership",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  For each set, decide whether it is an interval. Justify your answer.         "
},
{
  "id": "ex-ch1-intersection-intervals",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-intersection-intervals",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Compute the intersection of the two intervals and , and express your answer in interval notation.   "
},
{
  "id": "ex-ch1-union-overlap-vs-disjoint",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-union-overlap-vs-disjoint",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Give one example of two intervals whose union is an interval, and one example of two intervals whose union is not an interval.   "
},
{
  "id": "ex-ch1-bijection-open-interval",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-bijection-open-interval",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Let . Define by , where and . Show that is a bijection.   "
},
{
  "id": "ex-ch1-countability-intervals",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-countability-intervals",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  Is each of the following sets finite, countably infinite, or uncountable?         "
},
{
  "id": "ex-ch1-completeness-infimum-equivalent",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-infimum-equivalent",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Prove that the least upper bound property is equivalent to: every non-empty subset of that is bounded below has an infimum.   "
},
{
  "id": "ex-ch1-completeness-n-unbounded",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-n-unbounded",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Prove that is not bounded above in .   "
},
{
  "id": "ex-ch1-completeness-q-not-complete",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-q-not-complete",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  Let . Show that is non-empty and bounded above in , but has no supremum in .   "
},
{
  "id": "sec-cardinality-subsets-real",
  "level": "1",
  "url": "sec-cardinality-subsets-real.html",
  "type": "Section",
  "number": "A.1",
  "title": "Cardinality",
  "body": " Cardinality  For sets , means there is a bijection between them. In that case, we say that and have the same cardinality cardinality . We write if there is an injection . A set is countably infinite countably infinite if . A set is countable countable if it is either finite or countably infinite.  We begin with standard countable models that will be reused in later proofs.    The set is countable.    The map , , is bijective, with inverse . Hence .      The set is countable.    Define by and . This is bijective, so .      The set is countable.    For each , the diagonal is finite. Also . Enumerating each diagonal in increasing order of gives an enumeration of , so is countable.    The next theorem is the main comparison tool.   Cantor-Bernstein-Schroder   If and , then .    Proofs of can be found in and .    A countable union of countable sets is countable.    Let be a countable family (indexed by ) of countable sets. For , let be the least index with . Then is an injection into . For each , choose an injection . Then injects into . Since is countable, the union is countable.      The set is countable (hence is countable).    The map gives an injection , so . For the reverse inequality, map to where in lowest terms and . This is injective, and is countable (as a countable union of countable sets), so . By , .    Let be a set and let . The indicator function indicator function of in , denoted (or when is understood), is the map defined by   For any set , indicator functions give a bijection , where is the set of maps .   Cantor   For every set , .    The map is an injection . To show there is no surjection , suppose is surjective. Define by . Since is surjective, for some . Evaluating at gives , impossible. Hence .      The real line is uncountable.    By , . Define by . If , let be the first index with . Then , so is injective. Therefore , and thus cannot be countable.      The irrational numbers are uncountable.    If were countable, then would be a union of two countable sets, hence countable, contradicting .    "
},
{
  "id": "sec-cardinality-subsets-real-2",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#sec-cardinality-subsets-real-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality countably infinite countable "
},
{
  "id": "prop-n-plus-zero-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-plus-zero-countable",
  "type": "Proposition",
  "number": "A.1.1",
  "title": "",
  "body": "  The set is countable.    The map , , is bijective, with inverse . Hence .   "
},
{
  "id": "prop-n-times-two-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-times-two-countable",
  "type": "Proposition",
  "number": "A.1.2",
  "title": "",
  "body": "  The set is countable.    Define by and . This is bijective, so .   "
},
{
  "id": "prop-n-square-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-square-countable",
  "type": "Proposition",
  "number": "A.1.3",
  "title": "",
  "body": "  The set is countable.    For each , the diagonal is finite. Also . Enumerating each diagonal in increasing order of gives an enumeration of , so is countable.   "
},
{
  "id": "thm-cantor-bernstein-schroder",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#thm-cantor-bernstein-schroder",
  "type": "Theorem",
  "number": "A.1.4",
  "title": "Cantor-Bernstein-Schroder.",
  "body": " Cantor-Bernstein-Schroder   If and , then .   "
},
{
  "id": "prop-countable-union-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-countable-union-countable",
  "type": "Proposition",
  "number": "A.1.5",
  "title": "",
  "body": "  A countable union of countable sets is countable.    Let be a countable family (indexed by ) of countable sets. For , let be the least index with . Then is an injection into . For each , choose an injection . Then injects into . Since is countable, the union is countable.   "
},
{
  "id": "prop-q-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-q-countable",
  "type": "Proposition",
  "number": "A.1.6",
  "title": "",
  "body": "  The set is countable (hence is countable).    The map gives an injection , so . For the reverse inequality, map to where in lowest terms and . This is injective, and is countable (as a countable union of countable sets), so . By , .   "
},
{
  "id": "sec-cardinality-subsets-real-12",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#sec-cardinality-subsets-real-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indicator function "
},
{
  "id": "thm-cantor-power-set",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#thm-cantor-power-set",
  "type": "Theorem",
  "number": "A.1.7",
  "title": "Cantor.",
  "body": " Cantor   For every set , .    The map is an injection . To show there is no surjection , suppose is surjective. Define by . Since is surjective, for some . Evaluating at gives , impossible. Hence .   "
},
{
  "id": "cor-r-uncountable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#cor-r-uncountable",
  "type": "Corollary",
  "number": "A.1.8",
  "title": "",
  "body": "  The real line is uncountable.    By , . Define by . If , let be the first index with . Then , so is injective. Therefore , and thus cannot be countable.   "
},
{
  "id": "prop-irrationals-uncountable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-irrationals-uncountable",
  "type": "Proposition",
  "number": "A.1.9",
  "title": "",
  "body": "  The irrational numbers are uncountable.    If were countable, then would be a union of two countable sets, hence countable, contradicting .   "
},
{
  "id": "sec-cardinality-exercises",
  "level": "1",
  "url": "sec-cardinality-exercises.html",
  "type": "Section",
  "number": "A.2",
  "title": "Exercises",
  "body": " Exercises   Show that is countable.  Show that any subset of a countable set is countable.  Show that and have the same cardinality by constructing an explicit bijection.  Show that the intersection of two intervals is empty, a singleton, or an interval.  Show that the union of two overlapping intervals is an interval.   "
},
{
  "id": "sec-axioms-foundations",
  "level": "1",
  "url": "sec-axioms-foundations.html",
  "type": "Section",
  "number": "B.1",
  "title": "Foundations and Consequences",
  "body": " Foundations and Consequences   Ordered-Field Axioms  We start with a set with two operations and , and a subset . We call this an ordered field ordered field when the following hold.     and are commutative and associative, and for all .    There are distinct elements such that and for all .    Every has an additive inverse with , and every nonzero has a multiplicative inverse with .    The set is closed under addition and multiplication.    For each , exactly one of , , holds.    We define if and only if , and if and only if or .  To characterize the real numbers, we add the least upper bound property least upper bound property : every nonempty subset of that is bounded above has a least upper bound in . An ordered field with this property is a complete ordered field complete ordered field .    Uniqueness Up to Isomorphism  A standard theorem says that any two complete ordered fields are isomorphic (as ordered fields). This is the precise sense in which there is only one real number system up to isomorphism.  Reference: , Chapter II, end of Section 4 (after the proof of existence of square roots), where he states that Properties I-VII determine the real number system up to a unique one-to-one correspondence preserving sums and products.    Immediate Consequences of the Axioms  The next results are typical short derivations from the axioms (compare , Chapter II, Sections 1-2).    The additive identity and multiplicative identity are unique. For each , the additive inverse is unique; if , then the multiplicative inverse is unique.    If are additive identities, then . The same argument gives uniqueness of . If both satisfy and , then . The multiplicative case is identical for .      For every : , , and .    Since , distributivity gives . Adding to both sides yields .  Next, , so is an additive inverse of ; by uniqueness, .  Then . Also gives , hence . Therefore .      If , then for every . If and , then . Also, for every .    If , then . But , so .  If additionally , then and . Closure of under multiplication gives , hence .  For , exactly one of , , holds. If , then . Otherwise either or , and . Thus is never negative, i.e. .     "
},
{
  "id": "subsec-axioms-ordered-field-2",
  "level": "2",
  "url": "sec-axioms-foundations.html#subsec-axioms-ordered-field-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered field "
},
{
  "id": "subsec-axioms-ordered-field-5",
  "level": "2",
  "url": "sec-axioms-foundations.html#subsec-axioms-ordered-field-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property complete ordered field "
},
{
  "id": "prop-axioms-identity-inverse-uniqueness",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-identity-inverse-uniqueness",
  "type": "Proposition",
  "number": "B.1.1",
  "title": "",
  "body": "  The additive identity and multiplicative identity are unique. For each , the additive inverse is unique; if , then the multiplicative inverse is unique.    If are additive identities, then . The same argument gives uniqueness of . If both satisfy and , then . The multiplicative case is identical for .   "
},
{
  "id": "prop-axioms-basic-algebra-consequences",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-basic-algebra-consequences",
  "type": "Proposition",
  "number": "B.1.2",
  "title": "",
  "body": "  For every : , , and .    Since , distributivity gives . Adding to both sides yields .  Next, , so is an additive inverse of ; by uniqueness, .  Then . Also gives , hence . Therefore .   "
},
{
  "id": "prop-axioms-basic-order-consequences",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-basic-order-consequences",
  "type": "Proposition",
  "number": "B.1.3",
  "title": "",
  "body": "  If , then for every . If and , then . Also, for every .    If , then . But , so .  If additionally , then and . Closure of under multiplication gives , hence .  For , exactly one of , , holds. If , then . Otherwise either or , and . Thus is never negative, i.e. .   "
},
{
  "id": "sec-intervals",
  "level": "1",
  "url": "sec-intervals.html",
  "type": "Section",
  "number": "C.1",
  "title": "Intervals",
  "body": " Intervals  An interval  interval  is a subset of of one of the following forms, where and :             When , the interval is the empty set and . A nondegenerate interval is an interval with at least two points.  An interval contains every point between any two of its elements. In other words, whenever with . Conversely, any subset of with this property is an interval.    Every interval in is one of the nine forms listed above.    Let be an interval. If , then . If is a singleton, then . So we may assume that is nondegenerate.  First suppose that is bounded below but not bounded above. Let . If , then is not a lower bound of , so there is with . Since is not bounded above, there is also with . Because is an interval and , we get . Thus . On the other hand, no element of can be less than . Hence or , according as or .  The case when is bounded above but not bounded below is similar: if , then or .  If is neither bounded below nor bounded above, then for every we can choose with . Hence , so .  Finally, suppose that is bounded below and above. Let and . Since is nondegenerate, we have . If , then is neither a lower bound nor an upper bound of . So there exist with . Therefore . Thus . Also every element of lies in . Consequently, is one of , according to whether and belong to .      Every nondegenerate interval has cardinality . In particular, it is uncountable.    Every such interval contains an open interval and is a subset of . It is enough to show . The map with , , is a bijection . Also is a bijection . Hence , so .      The intersection of two intervals is an interval.    Let be intervals. Since and singletons are intervals, we may assume has at least two points . Since and are intervals, is a subset of both and , and hence of . Thus, is an interval.      The union of two overlapping intervals is an interval.    Let be two overlapping intervals, and pick . If is a singleton, then we are done. Otherwise, we can take in . We must show . If both and lie in the same interval, then is a subset of that interval, hence of . Otherwise, after relabeling we may assume and . If , then , a contradiction. If , then , a contradiction. Therefore . Then we have and . Hence , so is an interval.    "
},
{
  "id": "sec-intervals-2",
  "level": "2",
  "url": "sec-intervals.html#sec-intervals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval "
},
{
  "id": "sec-intervals-4",
  "level": "2",
  "url": "sec-intervals.html#sec-intervals-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nondegenerate interval "
},
{
  "id": "prop-classification-of-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-classification-of-intervals",
  "type": "Proposition",
  "number": "C.1.1",
  "title": "",
  "body": "  Every interval in is one of the nine forms listed above.    Let be an interval. If , then . If is a singleton, then . So we may assume that is nondegenerate.  First suppose that is bounded below but not bounded above. Let . If , then is not a lower bound of , so there is with . Since is not bounded above, there is also with . Because is an interval and , we get . Thus . On the other hand, no element of can be less than . Hence or , according as or .  The case when is bounded above but not bounded below is similar: if , then or .  If is neither bounded below nor bounded above, then for every we can choose with . Hence , so .  Finally, suppose that is bounded below and above. Let and . Since is nondegenerate, we have . If , then is neither a lower bound nor an upper bound of . So there exist with . Therefore . Thus . Also every element of lies in . Consequently, is one of , according to whether and belong to .   "
},
{
  "id": "prop-interval-cardinality-r",
  "level": "2",
  "url": "sec-intervals.html#prop-interval-cardinality-r",
  "type": "Proposition",
  "number": "C.1.2",
  "title": "",
  "body": "  Every nondegenerate interval has cardinality . In particular, it is uncountable.    Every such interval contains an open interval and is a subset of . It is enough to show . The map with , , is a bijection . Also is a bijection . Hence , so .   "
},
{
  "id": "prop-intersection-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-intersection-intervals",
  "type": "Proposition",
  "number": "C.1.3",
  "title": "",
  "body": "  The intersection of two intervals is an interval.    Let be intervals. Since and singletons are intervals, we may assume has at least two points . Since and are intervals, is a subset of both and , and hence of . Thus, is an interval.   "
},
{
  "id": "prop-union-overlapping-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-union-overlapping-intervals",
  "type": "Proposition",
  "number": "C.1.4",
  "title": "",
  "body": "  The union of two overlapping intervals is an interval.    Let be two overlapping intervals, and pick . If is a singleton, then we are done. Otherwise, we can take in . We must show . If both and lie in the same interval, then is a subset of that interval, hence of . Otherwise, after relabeling we may assume and . If , then , a contradiction. If , then , a contradiction. Therefore . Then we have and . Hence , so is an interval.   "
},
{
  "id": "references-general",
  "level": "1",
  "url": "references-general.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Maxwell Rosenlicht, Introduction to Analysis .  Walter Rudin, Principles of Mathematical Analysis .  Keith G. Binmore, Mathematical Analysis: A Straightforward Approach .  Paul Garrett, A Proof of the Cantor-Schroeder-Bernstein Theorem . Online lecture note .  Trevor Hyde, A Dynamical Proof of the Cantor-Bernstein Theorem . Online note .  "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-7",
  "level": "1",
  "url": "backmatter-7.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
